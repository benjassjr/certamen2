@extends("layouts.master")

@section("contenido")
    <div class="row mt-2">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <span>Filtrar</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="filtro-cbx">
                        <option value="todos">Todos</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <div class="card">
            <div class="card-body">
                <table class="table table-bordered table-hover table-striped table-responsive">
                    <thead class="bg-success text-white">
                    <tr>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Medidor</th>
                        <th>Valor</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody id="tbody-lectura">

                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
@endsection

@section("javascript")
    <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
    <script src="{{asset('js/mediciones_existentes.js')}}"></script>
@endsection