<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 03/07/2018
 * Time: 11:54
 */

namespace AppBundle\Entity;


class Credentials
{
    private $login;

    private $password;

    /**
     * @return mixed
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * @param mixed $login
     */
    public function setLogin($login)
    {
        $this->login = $login;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }
}
