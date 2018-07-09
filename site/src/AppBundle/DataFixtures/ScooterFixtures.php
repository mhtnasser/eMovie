<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 04/07/2018
 * Time: 09:15
 */

namespace AppBundle\DataFixtures;


use AppBundle\Entity\Scooter;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class ScooterFixtures extends Fixture
{
    /**
     * Load data fixtures with the passed EntityManager
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        // TODO: Implement load() method.
        for ($i = 0; $i < 30; $i++) {
            $scooter = new Scooter();
            $scooter->setPrice(rand(100, 10000) / 100);
            $scooter->setBrand('Marque' . $i);
            $scooter->setColor('Color' . $i);
            $scooter->setDateBuy(new \DateTime('now'));
            $scooter->setLicensePlate('AA-10'.$i.'BB');
            $scooter->setModel('Scooter' . $i);
            $scooter->setNbKm(1000);
            $scooter->setPlace('2');
            $scooter->setSerialNumber('100' . $i);
            $scooter->setHeatingHandle(true);
            $scooter->setCc(125);
            
            $manager->persist($scooter);
        }
        $manager->flush();
    }
}
