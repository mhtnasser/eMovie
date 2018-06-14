<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Rending
 *
 * @ORM\Table(name="rending")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RendingRepository")
 */
class Rending
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
     * @ORM\Column(name="NbKm", type="string", length=255)
     */
    private $nbKm;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="DateStart", type="datetime")
     */
    private $dateStart;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="DateEnd", type="datetime")
     */
    private $dateEnd;

    /**
     * @var int
     *
     * @ORM\Column(name="PriceByKm", type="integer")
     */
    private $priceByKm;


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
     * Set nbKm
     *
     * @param string $nbKm
     *
     * @return Rending
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
     * Set dateStart
     *
     * @param \DateTime $dateStart
     *
     * @return Rending
     */
    public function setDateStart($dateStart)
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    /**
     * Get dateStart
     *
     * @return \DateTime
     */
    public function getDateStart()
    {
        return $this->dateStart;
    }

    /**
     * Set dateEnd
     *
     * @param \DateTime $dateEnd
     *
     * @return Rending
     */
    public function setDateEnd($dateEnd)
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    /**
     * Get dateEnd
     *
     * @return \DateTime
     */
    public function getDateEnd()
    {
        return $this->dateEnd;
    }

    /**
     * Set priceByKm
     *
     * @param integer $priceByKm
     *
     * @return Rending
     */
    public function setPriceByKm($priceByKm)
    {
        $this->priceByKm = $priceByKm;

        return $this;
    }

    /**
     * Get priceByKm
     *
     * @return int
     */
    public function getPriceByKm()
    {
        return $this->priceByKm;
    }
}

