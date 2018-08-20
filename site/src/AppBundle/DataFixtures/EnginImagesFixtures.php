<?php
/**
 * Created by PhpStorm.
 * User: mahdi
 * Date: 20/08/2018
 * Time: 10:49
 */

namespace AppBundle\DataFixtures;


use AppBundle\Entity\ImageEngin;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class EnginImagesFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 30; $i++) {
            $image = new ImageEngin();
            $image->setUrl("http://www.alpha-car.com/wp-content/uploads/2017/08/voiture-electrique.jpg");
            $image->setAlt("Image " . $i);
            $image->setEngin($this->getReference("Scooter-" . mt_rand(0, 29)));

            $this->addReference('Image-' . $i, $image);
            $manager->persist($image);
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
