<template>
  <div>
    <container title="图标">
      <div slot="content">
        <button type="button" class="btn btn-default" aria-label="Left Align">
          <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default btn-lg">
          <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
        </button>
        <p class="glyphicon glyphicon-object-align-horizontal"></p>
        <span class="glyphicon glyphicon-sunglasses"></span>
        <div class="alert alert-danger" role="alert">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span class="sr-only">Error:</span>
          Enter a valid email address
        </div>
      </div>
    </container>

    <container title="下拉菜单">
      <div slot="content">
        <!-- dorpup dropdown -->
        <div class="dropdown">
          <button
            class="btn btn-default dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Dropdown
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a href="#">Action</a>
            </li>
            <li>
              <a href="#">Another action</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="#">Separated link</a>
            </li>
          </ul>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.css";
import container from "../../components/container";
export default {
  name: "bootstrap",
  components: {
    container
  }
};
</script>

<style lang="less">
</style>