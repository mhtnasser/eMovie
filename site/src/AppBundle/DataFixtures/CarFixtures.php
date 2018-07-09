<?php
/**
 * Created by PhpStorm.
 * User: nasri
 * Date: 04/07/2018
 * Time: 09:15
 */

namespace AppBundle\DataFixtures;


use AppBundle\Entity\Car;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class CarFixtures extends Fixture
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
            $car = new Car();
            $car->setPrice(rand(1000, 100000) / 100);
            $car->setBrand('Marque' . $i);
            $car->setColor('Color' . $i);
            $car->setDateBuy(new \DateTime('now'));
            $car->setLicensePlate('AA-10'.$i.'BB');
            $car->setModel('Car' . $i);
            $car->setNbKm(1000);
            $car->setPlace('5');
            $car->setSerialNumber('100' . $i);
            $car->setAirConditioning(true);
            $car->setHeater(true);
            $car->setNbSeat(5);

            $manager->persist($car);
        }
        $manager->flush();
    }
}
