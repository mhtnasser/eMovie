<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ReservationStatus
 *
 * @ORM\Table(name="reservation_status")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ReservationStatusRepository")
 */
class ReservationStatus
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


    public function __construct()
    {
        $this->id = 1;
    }

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
}

