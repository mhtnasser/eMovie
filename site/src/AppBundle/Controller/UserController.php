<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 14/06/2018
 * Time: 14:37
 */

namespace AppBundle\Controller;


use AppBundle\Entity\User;
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
        $m = new User();
        $m->setRoles(['role_user']);
        $m->setUserName('pop');
        $m->setLastName('nik');
        $m->setPassword('nik');
        $m->setEmail('nik@pop.com');
        $m->setLoyalty(2);
        $m->setRegistration(new \DateTime('now'));
        return $m;
    }
}
