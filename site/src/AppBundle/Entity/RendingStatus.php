<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * RendingStatus
 *
 * @ORM\Table(name="rending_status")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RendingStatusRepository")
 */
class RendingStatus
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
     * @ORM\Column(name="Libelle", type="string", length=255)
     */
    private $libelle;
    
    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Rending" , inversedBy="rendingStatus");
     */
    private $rending;
    


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
     * Set libelle
     *
     * @param string $libelle
     */
    public function setLibelle(string $libelle) : void
    {
        $this->libelle = $libelle;
    }

    /**
     * Get libelle
     *
     * @return string
     */
    public function getLibelle() : string
    {
        return $this->libelle;
    }

    /**
     * Set rending
     *
     * @param \AppBundle\Entity\Rending $rending
     *
     * @return RendingStatus
     */
    public function setRending(\AppBundle\Entity\Rending $rending = null)
    {
        $this->rending = $rending;

        return $this;
    }

    /**
     * Get rending
     *
     * @return \AppBundle\Entity\Rending
     */
    public function getRending()
    {
        return $this->rending;
    }
}
