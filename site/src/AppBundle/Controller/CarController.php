<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 20/08/2018
 * Time: 10:58
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Car;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use FOS\RestBundle\Controller\Annotations as Rest;

class CarController extends Controller
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @Rest\Get("/api/cars")
     * @Rest\View
     * @return array
     */
    public function AllCarAction()
    {
        $cars = $this->em->getRepository(Car::class)->findAll();
        if (!$cars) {
            Throw new NotFoundHttpException('not found cars');
        }
        return $cars;
    }
}
