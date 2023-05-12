@extends('vendor.voyager.views.master')

@section('page_title', 'Danh sách đặt hàng')

@section('page_header')
<div class="container-fluid">
    <h1 class="page-title">
        <i class="voyager-shop"></i> Đặt hàng
    </h1>

    @can('add', app(App\Models\Pay::class))
    <a href="{{ route('voyager.pays.create') }}" class="btn btn-success btn-add-new">
        <i class="voyager-plus"></i> <span>Thêm mới</span>
    </a>
    @endcan

    {{-- @can('delete', app(App\Models\Pay::class))
    @include('voyager::partials.bulk-delete')
    @endcan --}}

</div>
@stop

@section('content')
<div class="page-content browse container-fluid">
    @include('voyager::alerts')
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-bordered">
                <div class="panel-body">
                    <div class="table-responsive">
                        {{ $content->links('common.paginate') }}
                        <table id="dataTable" class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Thông tin khách hàng</th>
                                    <th>Sản phẩm</th>
                                    <th>Thông tin đặt hàng</th>
                                    <th>Trạng thái</th>
                                    <th>Loại thanh toán</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($content as $data)
                                @php
                                $priceDiscount =round($data->product->price -
                                ($data->product->price*($data->product->discount/100)),-1);
                                @endphp
                                <tr>
                                    <td>
                                        <p>Họ và tên: {{ $data->user->name }}</p>
                                        <p>Số điện thoại: {{ $data->user->phone }}</p>
                                        <p>Địa chỉ: {{ $data->user->address }}</p>
                                    </td>
                                    <th>
                                        <p>Tên sản phẩm: {{$data->product->title}}</p>
                                        <p>Giá gốc {{$data->product->price}} , giảm giá: {{$data->product->discount}}%,
                                            giá sau khi giảm: {{ $priceDiscount }}</p>
                                        <p>Sản phẩm: <a
                                                href="{{ env('APP_FE_URL')}}/product/{{ $data->product->slug }}">Xem sản
                                                phẩm</a></p>
                                    </th>
                                    <th>
                                        <p>Phân loại: {{$data->detail}}</p>
                                        <p>Số lượng: {{$data->count}}</p>
                                        <p>Tổng giá: {{ $priceDiscount * $data->count }}</p>
                                        <p>Mã giao dịch: {{$data->info_pay}}</p>
                                    </th>
                                    <th>
                                        @if ($data->status == 0)
                                        <span class="label label-warning">Đang chờ duyệt</span>
                                        @elseif($data->status == 1)
                                        <span class="label label-success">Đã duyệt</span>
                                        @elseif($data->status == 2)
                                        <span class="label label-info">Đang giao hàng</span>
                                        @elseif($data->status == 3)
                                        <span class="label label-primary">Giao hàng thành công</span>
                                        @elseif($data->status == 4)
                                        <span class="label label-danger">Đơn hàng đã bị hủy</span>
                                        @endif
                                    </th>
                                    <th>
                                        @if ($data->type == 1)
                                        <span class="label label-info">Thanh toán bằng ATM</span>
                                        @else
                                        <span class="label label-primary">Thanh toán khi giao hàng</span>
                                        @endif
                                    </th>
                                    <td class="no-sort no-click bread-actions" style="display: flex;">


                                        <div style="display: flex; flex-direction: column">
                                            <a href="/admin/pays/status/{{$data->id}}/1" title="status"
                                                class="btn btn-sm btn-success pull-right status">
                                                <span class="hidden-xs hidden-sm">
                                                    Duyệt đơn
                                                </span>
                                            </a>
                                            <a href="/admin/pays/status/{{$data->id}}/2" title="status"
                                                class="btn btn-sm btn-info pull-right status">
                                                <span class="hidden-xs hidden-sm">
                                                    Đang giao hàng
                                                </span>
                                            </a>
                                            <a href="/admin/pays/status/{{$data->id}}/3" title="status"
                                                class="btn btn-sm btn-info pull-right status">
                                                <span class="hidden-xs hidden-sm">
                                                    Giao hàng thành công
                                                </span>
                                            </a>


                                        </div>
                                        <div style="display: flex; flex-direction: column">
                                            <a href="/admin/pays/status/{{$data->id}}/4" title="status" style="margin-left: 5px"
                                                class="btn btn-sm btn-danger pull-right status">
                                                <span class="hidden-xs hidden-sm">
                                                    Đơn hàng bị hủy
                                                </span>
                                            </a>
                                            <a href="/admin/pays/{{$data->id}}/edit" title="Edit"
                                                class="btn btn-sm btn-success pull-right edit">
                                                <i class="voyager-edit"></i>
                                                <span class="hidden-xs hidden-sm">
                                                    Sửa
                                                </span>
                                            </a>
                                            <a href="javascript:;" title="Delete"
                                                class="btn btn-sm btn-danger pull-right delete" data-id="{{$data->id}}"
                                                id="delete-{{$data->id}}">
                                                <i class="voyager-trash"></i> <span
                                                    class="hidden-xs hidden-sm">Xóa</span>
                                            </a>
                                        </div>

                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $content->links('common.paginate') }}


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- Single delete modal --}}
<div class="modal modal-danger fade" tabindex="-1" id="delete_modal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                    aria-label="{{ __('voyager::generic.close') }}"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                    <i class="voyager-trash"></i>
                    Bạn có chắc chắn muốn hóa thông tin đơn hàng này?
                </h4>
            </div>
            <div class="modal-footer">
                <form action="#" id="delete_form" method="POST">
                    {{ method_field('DELETE') }}
                    {{ csrf_field() }}
                    <input type="submit" class="btn btn-danger pull-right delete-confirm" value="Xóa">
                </form>
                <button type="button" class="btn btn-default pull-right" data-dismiss="modal">
                    Hủy
                </button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
@stop

@section('css')
<link rel="stylesheet" href="{{ voyager_asset('lib/css/responsive.dataTables.min.css') }}">
@stop

@section('javascript')
<script src="{{ voyager_asset('lib/js/dataTables.responsive.min.js') }}"></script>

<script>
    $(document).ready(function () {

        var deleteFormAction;
        $('td').on('click', '.delete', function (e) {
            $('#delete_form')[0].action = '{{ route('voyager.pays.destroy', '__id') }}'.replace('__id', $(this).data('id'));
            $('#delete_modal').modal('show');
        });

    })
</script>
@stop
