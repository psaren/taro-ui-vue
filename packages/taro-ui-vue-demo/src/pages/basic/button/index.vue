<template>
  <view>
    <DocsHeader title="Button 按钮" />
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title">
          主操作
        </view>
        <view class="panel__content">
          <view class="btn-item">
            <AtButton
              type="primary"
            >
              主操作按钮
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              type="primary"
              loading
            >
              Loading
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              type="primary"
              disabled
            >
              不可操作
            </AtButton>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title">
          次要操作
        </view>
        <view class="panel__content">
          <view class="btn-item">
            <AtButton type="secondary">
              次操作按钮
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              type="secondary"
              loading
            >
              Loading
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              type="secondary"
              disabled
            >
              不可操作
            </AtButton>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">
          次次要操作
        </view>
        <view class="panel__content">
          <view class="btn-item">
            <AtButton>次次要操作按钮</AtButton>
          </view>
          <view class="btn-item">
            <AtButton loading>
              Loading
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton disabled>
              不可操作
            </AtButton>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">
          通栏按钮
        </view>
        <view
          class="panel__content"
          style="padding:0"
        >
          <view class="btn-item">
            <AtButton
              type="primary"
              full
            >
              主操作按钮
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              type="secondary"
              full
            >
              次操作按钮
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton full>
              次次要操作按钮
            </AtButton>
          </view>
          <view class="btn-item">
            <AtButton
              disabled
              full
            >
              不可操作
            </AtButton>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">
          小按钮
        </view>
        <view class="panel__content">
          <view class="btn-item">
            <view class="subitem">
              <AtButton
                type="primary"
                size="small"
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton
                type="secondary"
                size="small"
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton size="small">
                按钮
              </AtButton>
            </view>
          </view>
          <view class="btn-item">
            <view class="subitem">
              <AtButton
                type="primary"
                size="small"
                loading
              />
            </view>
            <view class="subitem">
              <AtButton
                type="secondary"
                size="small"
                loading
              />
            </view>
            <view class="subitem">
              <AtButton
                size="small"
                loading
              />
            </view>
          </view>
          <view class="btn-item">
            <view class="subitem">
              <AtButton
                type="primary"
                size="small"
                disabled
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton
                type="secondary"
                size="small"
                disabled
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton
                size="small"
                disabled
              >
                按钮
              </AtButton>
            </view>
          </view>
        </view>
      </view>

      <view class="panel">
        <view class="panel__title">
          圆角按钮
        </view>
        <view class="panel__content">
          <view class="btn-item">
            <view class="subitem">
              <AtButton
                type="primary"
                size="small"
                circle
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton
                type="secondary"
                size="small"
                circle
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton
                size="small"
                circle
              >
                按钮
              </AtButton>
            </view>
          </view>
          <view class="btn-item">
            <view class="subitem">
              <AtButton
                type="primary"
                size="small"
                loading
                circle
              />
            </view>
            <view class="subitem">
              <AtButton
                type="secondary"
                size="small"
                loading
                circle
              />
            </view>
            <view class="subitem">
              <AtButton
                size="small"
                loading
                circle
              />
            </view>
          </view>
          <view class="btn-item">
            <view class="subitem">
              <AtButton
                type="primary"
                size="small"
                disabled
                circle
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton
                type="secondary"
                size="small"
                disabled
                circle
              >
                按钮
              </AtButton>
            </view>
            <view class="subitem">
              <AtButton
                size="small"
                disabled
                circle
              >
                按钮
              </AtButton>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import './index.scss'

export default {
	data() {
		return {}
	}
}
</script>
