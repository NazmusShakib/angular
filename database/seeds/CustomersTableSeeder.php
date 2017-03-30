<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('customers')->delete();
        $faker = Faker\Factory::create();

        $limit = 30;

        for ($i = 0; $i < $limit; $i++) {
            DB::table('customers')->insert([ //,
                'customerName' => $faker->name($gender = null|'male'|'female'),
                'customerEmail' => $faker->freeEmail,
                'customerContact' => $faker->phoneNumber,
                'customerAddress' => $faker->address
            ]);
        }
    }
}
