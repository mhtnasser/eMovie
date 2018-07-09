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
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Engin" , inversedBy="rending");
     */
    private $engin;

    /**
     * Many Features have One Product.
     * @ManyToOne(targetEntity="User", inversedBy="rendings")
     * @JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;


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
     * Set engin
     *
     * @param \AppBundle\Entity\Engin $engin
     *
     * @return Rending
     */
    public function setEngin(\AppBundle\Entity\Engin $engin = null)
    {
        $this->engin = $engin;

        return $this;
    }

    /**
     * Get engin
     *
     * @return \AppBundle\Entity\Engin
     */
    public function getEngin()
    {
        return $this->engin;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }


}
