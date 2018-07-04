<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ImageEngin
 *
 * @ORM\Table(name="engin_images")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\EnginImageRepository")
 */
class ImageEngin
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
     * @ORM\Column(name="url", type="string", length=255)
     */
    private $url;

    /**
     * @var string
     *
     * @ORM\Column(name="alt", type="string", length=255)
     */
    private $alt;
    
    /**
     *
     * @var unknown
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Engin" , inversedBy="imagesEngin");
     */
    private $engin;
    


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
     * Set url
     *
     * @param string $url
     *
     */
    public function setUrl(string $url) : void
    {
        $this->url = $url;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl() : string
    {
        return $this->url;
    }

    /**
     * Set alt
     *
     * @param string $alt
     *
     */
    public function setAlt(string $alt) : void
    {
        $this->alt = $alt;
    }

    /**
     * Get alt
     *
     * @return string
     */
    public function getAlt() : string
    {
        return $this->alt;
    }

    /**
     * Set engin
     *
     * @param \AppBundle\Entity\Engin $engin
     *
     * @return ImageEngin
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
}
