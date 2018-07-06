<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 03/07/2018
 * Time: 12:07
 */

namespace AppBundle\Controller;


use AppBundle\Entity\AuthToken;
use AppBundle\Entity\Credentials;
use AppBundle\Form\CredentialsType;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\View\View;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Tests\Encoder\PasswordEncoder; // alias pour toutes les annotations


class AuthTokenController extends Controller
{
    /**
     * @Rest\View(statusCode=Response::HTTP_CREATED, serializerGroups={"auth-token"})
     * @Rest\Post("/auth-tokens")
     * @param Request $request
     * @param EntityManager|EntityManagerInterface $em
     * @param PasswordEncoderInterface|UserPasswordEncoderInterface|PasswordEncoder $encoder
     * @return \Symfony\Component\Form\FormInterface
     */
    public function postAuthTokensAction(Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        $credentiels = new Credentials();
        $form = $this->createForm(CredentialsType::class, $credentiels);

        $form->submit($request->request->all());
        if (!$form->isValid())
        {
            return $form;
        }

        $user = $em->getRepository('AppBundle:User')
            ->findOneByEmail($credentiels->getLogin());
        if (!$user)
        { // l'utilisateur n'existe pas
            return $this->invalidCredentials('l\'utilisateur n\'existe pas');
        }

        $isPasswordValide = $encoder->isPasswordValid($user, $credentiels->getPassword());

        if (!$isPasswordValide)
        { // le mot de passe n'est pas correct
            return $this->invalidCredentials('le mot de passe n\'est pas correct');
        }

        /** @var AuthToken $authtoken */
        $authtoken = new AuthToken();
        $authtoken->setValue(base64_encode(random_bytes(50)));
        $authtoken->setCreatedAt(new \DateTime('now'));
        $authtoken->setUser($user);

        $em->persist($authtoken);
        $em->flush();
        return $authtoken;
    }

    /**
     * @param String $msg
     * @return static
     */
    private function invalidCredentials(String $msg)
    {
        return View::create(['message' => $msg], Response::HTTP_BAD_REQUEST);
    }
}
