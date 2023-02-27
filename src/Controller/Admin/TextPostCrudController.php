<?php

namespace App\Controller\Admin;

use App\Entity\TextPost;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TextPostCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return TextPost::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
