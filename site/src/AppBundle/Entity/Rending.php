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
}

