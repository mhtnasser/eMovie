<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 14/06/2018
 * Time: 14:37
 */

namespace AppBundle\Controller;



use AppBundle\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;

class UserController extends Controller
{
    /**
     * @Rest\Get("/test")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function randomAction(EntityManagerInterface $em)
    {
        /** @var User $m */
        $m = $em->getRepository('AppBundle:User')->find(1);
        $m->setPlainPassword('lol');
        return $m;
    }

    /**
     * @Rest\Get("/api/test")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function apiAction(EntityManagerInterface $em)
    {
        /** @var User $m */
        $m = $em->getRepository('AppBundle:User')->find(11);
        $m->setPlainPassword('bonjour ');
        return $m;
    }
}
