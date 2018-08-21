<?php
/**
 * Created by PhpStorm.
 * User: mahdi
 * Date: 20/08/2018
 * Time: 11:47
 */

namespace AppBundle\Controller;

use AppBundle\Entity\Rending;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use FOS\RestBundle\Controller\Annotations as Rest;

class RendingController extends Controller {

    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @Rest\Get("/api/rendings")
     * @Rest\View
     * @return array
     */
    public function RendingsAction()
    {
        $rendings = $this->em->getRepository(Rending::class)->find(1);
        if (!$rendings) {
            Throw new NotFoundHttpException('not found rending');
        }

        return $rendings;
    }

}
