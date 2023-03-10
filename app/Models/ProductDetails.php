<?php

namespace App\Models;

use App\Casts\Hash;
use App\Models\BaseModel;
use App\Scopes\CompanyScope;
use Illuminate\Database\Eloquent\Builder;

class ProductDetails extends BaseModel
{
    protected $table = 'product_details';

    protected $default = ['xid'];

    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $hidden = ['id', 'warehouse_id', 'product_id', 'tax_id'];

    protected $appends = ['xid', 'x_warehouse_id', 'x_product_id', 'x_tax_id'];

    protected $filterable = ['id'];

    protected $hashableGetterFunctions = [
        'getXWarehouseIdAttribute' => 'warehouse_id',
        'getXProductIdAttribute' => 'product_id',
        'getXTaxIdAttribute' => 'tax_id',
    ];

    protected $casts = [
        'warehouse_id' => Hash::class . ':hash',
        'product_id' => Hash::class . ':hash',
        'tax_id' => Hash::class . ':hash',
    ];

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new CompanyScope);

        static::addGlobalScope('current_warehouse', function (Builder $builder) {

            $request = request();
            $urlArray = explode('.', $request->route()->action['as']);

            if ($urlArray && $urlArray[1] && $urlArray[1] == 'front') {
                if ($request->route()->warehouse != null && $request->route()->warehouse != "") {
                    $warehouse = Warehouse::where('slug', $request->route()->warehouse)->first();

                    if ($warehouse) {
                        $builder->where('product_details.warehouse_id', $warehouse->id);
                    }
                }
            } else {
                $warehouse = warehouse();

                if ($warehouse) {
                    $builder->where('product_details.warehouse_id', $warehouse->id);
                }
            }
        });
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function tax()
    {
        return $this->belongsTo(Tax::class);
    }
}
