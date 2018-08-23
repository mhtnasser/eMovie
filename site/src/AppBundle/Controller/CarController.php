<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 20/08/2018
 * Time: 10:58
 */

namespace AppBundle\Controller;


use AppBundle\Entity\Car;
use AppBundle\Form\CarType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
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
     * @Rest\Get("/api/cars", name="all_cars")
     * @Rest\View
     * @return array
     */
    public function allCarAction()
    {
        $cars = $this->em->getRepository(Car::class)->findAll();
        if (!$cars) {
            Throw new NotFoundHttpException('not found cars');
        }
        return $cars;
    }

    /**
     * @Rest\Get("/api/car/{carId}", name="one_car", requirements={"carId"="\d+"})
     * @Rest\View()
     * @param $carId
     * @return null|object
     * @return null|object
     */
    public function carAction($carId)
    {
        $car = $this->em->getRepository(Car::class)->find($carId);

        if (!$car) {
            Throw new NotFoundHttpException('not found cars id'. $carId);
        }

        return $car;
    }

    /**
     * working in the methode
     * @Rest\Get("/toto", name="post_cars")
     * @param Request $request
     * @param FormFactory|FormFactoryInterface $factory
     */
    public function postCarAction(Request $request, FormFactoryInterface $factory)
    {
        $car = new Car();
        $form = $factory->create(CarType::class, $car);
        dump($form); die();
    }
}
