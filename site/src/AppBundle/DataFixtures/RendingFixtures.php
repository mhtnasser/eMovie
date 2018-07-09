<?php
/**
 * Created by PhpStorm.
 * User: mahdi
 * Date: 09/07/2018
 * Time: 14:49
 */

namespace AppBundle\DataFixtures;


use AppBundle\Entity\Rending;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class RendingFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 30; $i++) {
            $rending = new Rending();
            $rending->setDateEnd(new \DateTime('2019-10-10'));
            $rending->setDateStart(new \DateTime('now'));
            $rending->setNbKm("1345");
            $rending->setPriceByKm(2);

            $rending->setUser($this->getReference('user-' . mt_rand(0, 9)));
            $rending->setEngin($this->getReference('Scooter-' . mt_rand(0, 29)));

            $this->addReference('Rending-' . $i, $rending);
            $manager->persist($rending);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            ScooterFixtures::class,
        );
    }

}
