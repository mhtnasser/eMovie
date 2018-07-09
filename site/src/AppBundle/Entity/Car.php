<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Car
 *
 * @ORM\Table(name="car")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CarRepository")
 */
class Car extends Engin
{

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
     * Set nbSeat
     *
     * @param integer $nbSeat
     *
     */
    public function setNbSeat(int $nbSeat) : void
    {
        $this->nbSeat = $nbSeat;
    }

    /**
     * Get nbSeat
     *
     * @return int
     */
    public function getNbSeat() : int
    {
        return $this->nbSeat;
    }

    /**
     * Set airConditioning
     *
     * @param boolean $airConditioning
     *
     */
    public function setAirConditioning(bool $airConditioning) : void
    {
        $this->airConditioning = $airConditioning;
    }

    /**
     * Get airConditioning
     *
     * @return bool
     */
    public function getAirConditioning() : bool
    {
        return $this->airConditioning;
    }

    /**
     * Set heater
     *
     * @param boolean $heater
     *
     */
    public function setHeater(bool $heater) : void
    {
        $this->heater = $heater;
    }

    /**
     * Get heater
     *
     * @return bool
     */
    public function getHeater() : bool
    {
        return $this->heater;
    }
}
