<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\OneToMany;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 */
class User implements UserInterface
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
     * @ORM\Column(name="userName", type="string", length=255)
     */
    private $userName;

    /**
     * @var string
     *
     * @ORM\Column(name="LastName", type="string", length=255)
     */
    private $lastName;

    /**
     * @var string
     *
     * @ORM\Column(name="Password", type="string", length=255)
     */
    private $password;

    /**
     * @var string
     *
     * @ORM\Column(name="Email", type="string", unique=true, length=255)
     */
    private $email;

    /**
     * @var int
     *
     * @ORM\Column(name="Loyalty", type="integer")
     */
    private $loyalty;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="Registration", type="datetime")
     */
    private $registration;

    /**
     * @var array
     *
     * @ORM\Column(name="roles", type="array")
     */
    private $roles;

    protected $plainPassword;

    /**
     * One Product has Many Features.
     * @OneToMany(targetEntity="Rending", mappedBy="user")
     */
    private $rendings;
    // ...

    public function __construct() {
        $this->rendings = new ArrayCollection();
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
     * Set userName
     *
     * @param string $userName
     *
     */
    public function setUserName(string $userName) : void
    {
        $this->userName = $userName;
    }

    /**
     * Get userName
     *
     * @return string
     */
    public function getUserName() : string
    {
        return $this->userName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     */
    public function setLastName(string $lastName) : void
    {
        $this->lastName = $lastName;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName() : string
    {
        return $this->lastName;
    }

    /**
     * Set password
     *
     * @param string $password
     */
    public function setPassword(string $password) : void
    {
        $this->password = $password;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword() : string
    {
        return $this->password;
    }

    /**
     * Set email
     *
     * @param string $email
     *
     */
    public function setEmail(string $email) : void
    {
        $this->email = $email;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail() : string
    {
        return $this->email;
    }

    /**
     * Set loyalty
     *
     * @param integer $loyalty
     *
     */
    public function setLoyalty(int $loyalty) : void
    {
        $this->loyalty = $loyalty;
    }

    /**
     * Get loyalty
     *
     * @return int
     */
    public function getLoyalty() : int
    {
        return $this->loyalty;
    }

    /**
     * Set registration
     *
     * @param \DateTime $registration
     *
     */
    public function setRegistration(\DateTime $registration) : void
    {
        $this->registration = $registration;
    }

    /**
     * Get registration
     *
     * @return \DateTime
     */
    public function getRegistration() : \DateTime
    {
        return $this->registration;
    }

    /**
     * Set roles
     *
     * @param array $roles
     *
     */
    public function setRoles(array $roles) : void
    {
        $this->roles = $roles;
    }

    /**
     * Get roles
     *
     * @return array
     */
    public function getRoles() : array
    {
        return $this->roles;
    }

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
        return;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials() : void
    {
        $this->plainPassword = null;
    }

    /**
     * @return string
     */
    public function getPlainPassword(): string
    {
        return $this->plainPassword;
    }

    /**
     * @param string $plainPassword
     */
    public function setPlainPassword(string $plainPassword)
    {
        $this->plainPassword = $plainPassword;
    }
}
