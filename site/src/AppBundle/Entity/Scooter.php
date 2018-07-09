<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Scooter
 *
 * @ORM\Table(name="scooter")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ScooterRepository")
 */
class Scooter extends Engin
{

    /**
     * @var int
     *
     * @ORM\Column(name="Cc", type="integer")
     */
    private $cc;

    /**
     * @var bool
     *
     * @ORM\Column(name="HeatingHandle", type="boolean")
     */
    private $heatingHandle;

    /**
     * Set cc
     *
     * @param integer $cc
     *
     */
    public function setCc(int $cc) : void
    {
        $this->cc = $cc;
    }

    /**
     * Get cc
     *
     * @return int
     */
    public function getCc() : int
    {
        return $this->cc;
    }

    /**
     * Set heatingHandle
     *
     * @param boolean $heatingHandle
     *
     */
    public function setHeatingHandle(bool $heatingHandle) : void
    {
        $this->heatingHandle = $heatingHandle;
    }

    /**
     * Get heatingHandle
     *
     * @return bool
     */
    public function getHeatingHandle() : bool
    {
        return $this->heatingHandle;
    }
}
