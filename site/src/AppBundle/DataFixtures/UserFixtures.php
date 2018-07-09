<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 04/07/2018
 * Time: 09:15
 */

namespace AppBundle\DataFixtures;


use AppBundle\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    /**
     * Load data fixtures with the passed EntityManager
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        // TODO: Implement load() method.
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user->setRoles(['role_user']);
            $user->setUserName('pop');
            $user->setLastName('nik' . $i);
            $password = $this->encoder->encodePassword($user, '1234');
            $user->setPassword($password);
            $user->setEmail($i . 'nik@pop.com');
            $user->setLoyalty(2);
            $user->setRegistration(new \DateTime('now'));

            //$this->addReference('user', $user);
            $manager->persist($user);
        }
        $manager->flush();
    }
}
