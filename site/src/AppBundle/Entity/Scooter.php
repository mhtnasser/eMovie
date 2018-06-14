<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Scooter
 *
 * @ORM\Table(name="scooter")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ScooterRepository")
 */
class Scooter
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
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set cc
     *
     * @param integer $cc
     *
     * @return Scooter
     */
    public function setCc($cc)
    {
        $this->cc = $cc;

        return $this;
    }

    /**
     * Get cc
     *
     * @return int
     */
    public function getCc()
    {
        return $this->cc;
    }

    /**
     * Set heatingHandle
     *
     * @param boolean $heatingHandle
     *
     * @return Scooter
     */
    public function setHeatingHandle($heatingHandle)
    {
        $this->heatingHandle = $heatingHandle;

        return $this;
    }

    /**
     * Get heatingHandle
     *
     * @return bool
     */
    public function getHeatingHandle()
    {
        return $this->heatingHandle;
    }
}

