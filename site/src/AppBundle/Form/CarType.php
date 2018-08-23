<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CarType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('nbSeat', NumberType::class)
            ->add('airConditioning', CheckboxType::class)
            ->add('heater', CheckboxType::class)
            ->add('brand', TextType::class)
            ->add('model', TextType::class)
            ->add('serialNumber', TextType::class)
            ->add('color', TextType::class)
            ->add('licensePlate', TextType::class)
            ->add('nbKm', NumberType::class)
            ->add('dateBuy', DateTimeType::class)
            ->add('price', NumberType::class)
            ->add('place', TextType::class);
    }/**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Car'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_car';
    }


}
