<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Engin
 *
 * @ORM\Table(name="engin")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\EnginRepository")
 */
class Engin
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="Brand", type="string", length=255)
     */
    private $brand;

    /**
     * @var string
     *
     * @ORM\Column(name="Model", type="string", length=255)
     */
    private $model;

    /**
     * @var string
     *
     * @ORM\Column(name="SerialNumber", type="string", length=255)
     */
    private $serialNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="Color", type="string", length=255)
     */
    private $color;

    /**
     * @var string
     *
     * @ORM\Column(name="LicensePlate", type="string", length=255)
     */
    private $licensePlate;

    /**
     * @var int
     *
     * @ORM\Column(name="NbKm", type="integer", length=255)
     */
    private $nbKm;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="DateBuy", type="datetime")
     */
    private $dateBuy;

    /**
     * @var int
     *
     * @ORM\Column(name="Price", type="integer")
     */
    private $price;

    /**
     * @var string
     *
     * @ORM\Column(name="Place", type="string", length=255)
     */
    private $place;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set brand
     *
     * @param string $brand
     *
     * @return Engin
     */
    public function setBrand($brand)
    {
        $this->brand = $brand;

        return $this;
    }

    /**
     * Get brand
     *
     * @return string
     */
    public function getBrand()
    {
        return $this->brand;
    }

    /**
     * Set model
     *
     * @param string $model
     *
     * @return Engin
     */
    public function setModel($model)
    {
        $this->model = $model;

        return $this;
    }

    /**
     * Get model
     *
     * @return string
     */
    public function getModel()
    {
        return $this->model;
    }

    /**
     * Set serialNumber
     *
     * @param string $serialNumber
     *
     * @return Engin
     */
    public function setSerialNumber($serialNumber)
    {
        $this->serialNumber = $serialNumber;

        return $this;
    }

    /**
     * Get serialNumber
     *
     * @return string
     */
    public function getSerialNumber()
    {
        return $this->serialNumber;
    }

    /**
     * Set color
     *
     * @param string $color
     *
     * @return Engin
     */
    public function setColor($color)
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Get color
     *
     * @return string
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Set licensePlate
     *
     * @param string $licensePlate
     *
     * @return Engin
     */
    public function setLicensePlate($licensePlate)
    {
        $this->licensePlate = $licensePlate;

        return $this;
    }

    /**
     * Get licensePlate
     *
     * @return string
     */
    public function getLicensePlate()
    {
        return $this->licensePlate;
    }

    /**
     * Set nbKm
     *
     * @param string $nbKm
     *
     * @return Engin
     */
    public function setNbKm($nbKm)
    {
        $this->nbKm = $nbKm;

        return $this;
    }

    /**
     * Get nbKm
     *
     * @return string
     */
    public function getNbKm()
    {
        return $this->nbKm;
    }

    /**
     * Set dateBuy
     *
     * @param \DateTime $dateBuy
     *
     * @return Engin
     */
    public function setDateBuy($dateBuy)
    {
        $this->dateBuy = $dateBuy;

        return $this;
    }

    /**
     * Get dateBuy
     *
     * @return \DateTime
     */
    public function getDateBuy()
    {
        return $this->dateBuy;
    }

    /**
     * Set price
     *
     * @param integer $price
     *
     * @return Engin
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return int
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set place
     *
     * @param string $place
     *
     * @return Engin
     */
    public function setPlace($place)
    {
        $this->place = $place;

        return $this;
    }

    /**
     * Get place
     *
     * @return string
     */
    public function getPlace()
    {
        return $this->place;
    }
}

