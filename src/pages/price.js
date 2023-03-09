/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Price = () => {
  return (
    <div
      id="price"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div class="container py-3">
        <header>
          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Pricing</h1>
            <p class="fs-5 text-muted">
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It’s built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
        </header>
        <main>
          <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Basic</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $10<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Mencatat barang masuk</li>
                    <li>Mencatat barang keluar</li>
                    <li>Mencatat hasil keuntungan</li>
                  </ul>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-primary"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                  <h4 class="my-0 fw-normal">Business</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $25<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Mencatat barang masuk dan keluar</li>
                    <li>Mencatat Keuntungan</li>
                    <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                    <li>Support 7x24 Jam</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-primary">
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-bg-primary border-primary">
                  <h4 class="my-0 fw-normal">Entrepreneur</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    $50<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Mencatat barang masuk dan keluar</li>
                    <li>Mencatat Keuntungan</li>
                    <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                    <li>Support 7x24 Jam</li>
                    <li>Export data ke Excel</li>
                    <li>AI Prediksi penghasilan</li>
                  </ul>
                  <button type="button" class="w-100 btn btn-lg btn-primary">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Price;
