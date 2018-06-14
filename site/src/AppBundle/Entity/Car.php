<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Car
 *
 * @ORM\Table(name="car")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CarRepository")
 */
class Car
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
     * @var int
     *
     * @ORM\Column(name="NbSeat", type="integer")
     */
    private $nbSeat;

    /**
     * @var bool
     *
     * @ORM\Column(name="AirConditioning", type="boolean")
     */
    private $airConditioning;

    /**
     * @var bool
     *
     * @ORM\Column(name="heater", type="boolean")
     */
    private $heater;


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
     * Set nbSeat
     *
     * @param integer $nbSeat
     *
     * @return Car
     */
    public function setNbSeat($nbSeat)
    {
        $this->nbSeat = $nbSeat;

        return $this;
    }

    /**
     * Get nbSeat
     *
     * @return int
     */
    public function getNbSeat()
    {
        return $this->nbSeat;
    }

    /**
     * Set airConditioning
     *
     * @param boolean $airConditioning
     *
     * @return Car
     */
    public function setAirConditioning($airConditioning)
    {
        $this->airConditioning = $airConditioning;

        return $this;
    }

    /**
     * Get airConditioning
     *
     * @return bool
     */
    public function getAirConditioning()
    {
        return $this->airConditioning;
    }

    /**
     * Set heater
     *
     * @param boolean $heater
     *
     * @return Car
     */
    public function setHeater($heater)
    {
        $this->heater = $heater;

        return $this;
    }

    /**
     * Get heater
     *
     * @return bool
     */
    public function getHeater()
    {
        return $this->heater;
    }
}

