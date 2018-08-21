<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\ManyToOne;

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
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\RendingStatus" , mappedBy="rending");
     */
    private $rendingStatus;
    
    /**
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Car");
     * @ORM\JoinColumn(name="car_id", referencedColumnName="id")
     */
    private $car;

    /**
     *
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Scooter");
     * @ORM\JoinColumn(name="scooter_id", referencedColumnName="id")
     */
    private $scooter;

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
     * Set nbKm
     *
     * @param string $nbKm
     *
     */
    public function setNbKm(string $nbKm) : void
    {
        $this->nbKm = $nbKm;
    }

    /**
     * Get nbKm
     *
     * @return string
     */
    public function getNbKm() : string
    {
        return $this->nbKm;
    }

    /**
     * Set dateStart
     *
     * @param \DateTime $dateStart
     *
     */
    public function setDateStart(\DateTime $dateStart) : void
    {
        $this->dateStart = $dateStart;
    }

    /**
     * Get dateStart
     *
     * @return \DateTime
     */
    public function getDateStart() : \DateTime
    {
        return $this->dateStart;
    }

    /**
     * Set dateEnd
     *
     * @param \DateTime $dateEnd
     *
     */
    public function setDateEnd(\DateTime $dateEnd) : void
    {
        $this->dateEnd = $dateEnd;
    }

    /**
     * Get dateEnd
     *
     * @return \DateTime
     */
    public function getDateEnd() : \DateTime
    {
        return $this->dateEnd;
    }

    /**
     * Set priceByKm
     *
     * @param integer $priceByKm
     *
     */
    public function setPriceByKm(int $priceByKm) : void
    {
        $this->priceByKm = $priceByKm;
    }

    /**
     * Get priceByKm
     *
     * @return int
     */
    public function getPriceByKm() : int
    {
        return $this->priceByKm;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->rendingStatus = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add rendingStatus
     *
     * @param \AppBundle\Entity\RendingStatus $rendingStatus
     *
     * @return Rending
     */
    public function addRendingStatus(\AppBundle\Entity\RendingStatus $rendingStatus)
    {
        $this->rendingStatus[] = $rendingStatus;

        return $this;
    }

    /**
     * Remove rendingStatus
     *
     * @param \AppBundle\Entity\RendingStatus $rendingStatus
     */
    public function removeRendingStatus(\AppBundle\Entity\RendingStatus $rendingStatus)
    {
        $this->rendingStatus->removeElement($rendingStatus);
    }

    /**
     * Get rendingStatus
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getRendingStatus()
    {
        return $this->rendingStatus;
    }

    /**
     * @return mixed
     */
    public function getCar()
    {
        return $this->car;
    }

    /**
     * @param mixed $car
     */
    public function setCar($car)
    {
        $this->car = $car;
    }

    /**
     * @return mixed
     */
    public function getScooter()
    {
        return $this->scooter;
    }

    /**
     * @param mixed $scooter
     */
    public function setScooter($scooter)
    {
        $this->scooter = $scooter;
    }
}
