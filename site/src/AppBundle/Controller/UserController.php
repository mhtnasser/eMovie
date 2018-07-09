<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 14/06/2018
 * Time: 14:37
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Scooter;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;

class UserController extends Controller
{
    /**
     * @Rest\Get("/test")
     * @Rest\View
     */
    public function randomAction()
    {
        $em = $this->getDoctrine()->getManager();
        /** @var Scooter $car */
        $car = $em->getRepository('AppBundle:Scooter')->find(364);

        return $car;


        /*$m = new User();
        $m->setRoles(['role_user']);
        $m->setUserName('pop');
        $m->setLastName('nik');
        $m->setPassword('nik');
        $m->setEmail('nik@pop.com');
        $m->setLoyalty(2);
        $m->setRegistration(new \DateTime('now'));
        $m->setPlainPassword("vcgfcn");
        return $m;*/
    }
}
