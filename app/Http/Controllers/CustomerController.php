<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Customer;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //return Customer::orderBy('id', 'asc')->get();
        $customers = Customer::orderBy('id', 'DESC')->paginate(4); // 5 is the number of items to show per page
        return $customers;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer = new Customer;
        $customer->customerName = $request->customerName;
        $customer->customerEmail = $request->customerEmail;
        $customer->customerContact = $request->customerContact;
        $customer->customerAddress = $request->customerAddress;
        $customer->save();
        return 'Customer record successfully created with id' . $customer->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Customer::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);
        $customer->customerName = $request->customerName;
        $customer->customerEmail = $request->customerEmail;
        $customer->customerContact = $request->customerContact;
        $customer->customerAddress = $request->customerAddress;
        $customer->save();
        return 'Customer record successfully updated with id ' . $customer->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::find($id)->delete();
        return 'Customer record successfully deleted';
    }
}
