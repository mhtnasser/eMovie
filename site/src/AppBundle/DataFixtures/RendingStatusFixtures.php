<?php
/**
 * Created by PhpStorm.
 * User: mahdi
 * Date: 09/07/2018
 * Time: 14:49
 */

namespace AppBundle\DataFixtures;

use AppBundle\Entity\RendingStatus;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class RendingStatusFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 30; $i++) {
            $rendingStatus = new RendingStatus();
            $rendingStatus->setLibelle("loué");
            $rendingStatus->setRending($this->getReference('Rending-' . mt_rand(0, 29)));

            $manager->persist($rendingStatus);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            ScooterFixtures::class,
            RendingFixtures::class,
        );
    }

}
