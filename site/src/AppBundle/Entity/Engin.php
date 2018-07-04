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
    protected $brand;

    /**
     * @var string
     *
     * @ORM\Column(name="Model", type="string", length=255)
     */
    protected $model;

    /**
     * @var string
     *
     * @ORM\Column(name="SerialNumber", type="string", length=255)
     */
    protected $serialNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="Color", type="string", length=255)
     */
    protected $color;

    /**
     * @var string
     *
     * @ORM\Column(name="LicensePlate", type="string", length=255)
     */
    protected $licensePlate;

    /**
     * @var int
     *
     * @ORM\Column(name="NbKm", type="integer", length=255)
     */
    protected $nbKm;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="DateBuy", type="datetime")
     */
    protected $dateBuy;

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
    protected $place;


    /**
     * Get id
     *
     * @return int
     */
    public function getId() : int
    {
        return $this->id;
    }

    /**
     * Set brand
     *
     * @param string $brand
     *
     */
    public function setBrand(string $brand) : void
    {
        $this->brand = $brand;
    }

    /**
     * Get brand
     *
     * @return string
     */
    public function getBrand() : string
    {
        return $this->brand;
    }

    /**
     * Set model
     *
     * @param string $model
     *
     */
    public function setModel(string $model) : void
    {
        $this->model = $model;
    }

    /**
     * Get model
     *
     * @return string
     */
    public function getModel() : string
    {
        return $this->model;
    }

    /**
     * Set serialNumber
     *
     * @param string $serialNumber
     *
     */
    public function setSerialNumber(string $serialNumber) : void
    {
        $this->serialNumber = $serialNumber;
    }

    /**
     * Get serialNumber
     *
     * @return string
     */
    public function getSerialNumber() : string
    {
        return $this->serialNumber;
    }

    /**
     * Set color
     *
     * @param string $color
     *
     */
    public function setColor(string $color) : void
    {
        $this->color = $color;
    }

    /**
     * Get color
     *
     * @return string
     */
    public function getColor() : string
    {
        return $this->color;
    }

    /**
     * Set licensePlate
     *
     * @param string $licensePlate
     *
     */
    public function setLicensePlate(string $licensePlate) : void
    {
        $this->licensePlate = $licensePlate;
    }

    /**
     * Get licensePlate
     *
     * @return string
     */
    public function getLicensePlate() : string
    {
        return $this->licensePlate;
    }

    /**
     * Set nbKm
     *
     * @param int $nbKm
     *
     */
    public function setNbKm(int $nbKm) : void
    {
        $this->nbKm = $nbKm;
    }

    /**
     * Get nbKm
     *
     * @return int
     */
    public function getNbKm() : int
    {
        return $this->nbKm;
    }

    /**
     * Set dateBuy
     *
     * @param \DateTime $dateBuy
     *
     */
    public function setDateBuy(\DateTime $dateBuy) : void
    {
        $this->dateBuy = $dateBuy;
    }

    /**
     * Get dateBuy
     *
     * @return \DateTime
     */
    public function getDateBuy() : \DateTime
    {
        return $this->dateBuy;
    }

    /**
     * Set price
     *
     * @param integer $price
     *
     */
    public function setPrice(int $price) : void
    {
        $this->price = $price;
    }

    /**
     * Get price
     *
     * @return int
     */
    public function getPrice() : int
    {
        return $this->price;
    }

    /**
     * Set place
     *
     * @param string $place
     *
     */
    public function setPlace(string $place) : void
    {
        $this->place = $place;
    }

    /**
     * Get place
     *
     * @return string
     */
    public function getPlace() : string
    {
        return $this->place;
    }
}

