<?php

namespace AppBundle\Controller;


use AppBundle\Entity\Scooter;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;

class ScooterController extends Controller
{
    /**
     * @Rest\Get("/scooter/test")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function randomScooterAction(EntityManagerInterface $em)
    {
        /** @var Scooter $m */
        $m = $em->getRepository('AppBundle:Scooter')->find(1);
        $m->setPlainPassword('lol');
        return $m;
    }

    /**
     * @Rest\Get("/api/scooter/test")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function apiAction(EntityManagerInterface $em)
    {
        /** @var Scooter $m */
        $m = $em->getRepository('AppBundle:Scooter')->find(1);
        $m->setPlainPassword('lol');
        return $m;
    }
    
    /**
     * @Rest\Get("/api/scooter/all")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function apiAllScooterAction(EntityManagerInterface $em)
    {
        /** @var Scooter $m */
        $m = $em->getRepository('AppBundle:Scooter')->findAll();
        //$m->setPlainPassword('lol');
        return $m;
    }
    
    /**
     * @Rest\Get("/api/scooter/allByRending")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function apiAllScooterByRendingAction(EntityManagerInterface $em , $rending)
    {
        /** @var Scooter $m */
        $m = $em->getRepository('AppBundle:Scooter')->findAllByRending($rending);
        $m->setPlainPassword('lol');
        return $m;
    }
    
    /**
     * @Rest\Get("/api/scooter/delete")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function apiDeleteScooterAction(EntityManagerInterface $em , $scooter)
    {
        /** @var Scooter $m */
        $em->remove($scooter);
        $em->flush();
    }
    
    
    
    /**
     * @Rest\Get("/api/scooter/edit")
     * @Rest\View
     * @param EntityManagerInterface $em
     * @return null|object
     */
    public function apiEditScooterAction(EntityManagerInterface $em , $scooterOld , $scooterNew)
    {
        /** @var Scooter $m */
        $new = $scooterNew;
        $old = $scooterOld;
        $em->flush();
    }
    
    
    
    
}
