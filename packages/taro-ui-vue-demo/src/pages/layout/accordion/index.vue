<template>
  <view class="page">
    <DocsHeader title="Accordion 手风琴" />
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title">基础用法</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <AtAccordion
              :onClick="onClick.bind(this, 'value1')"
              title="标题一"
              :open="value1"
            >
              <AtList :hasBorder="false">
                <AtListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <AtListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </AtList>
            </AtAccordion>
            <AtAccordion
              :open="value2"
              title="默认开启"
              :onClick="onClick.bind(this, 'value2')"
            >
              <AtList :hasBorder="false">
                <AtListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <AtListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
                <AtListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </AtList>
            </AtAccordion>
          </view>
        </view>
      </view>

      <!-- 配置图标 -->
      <view class="panel">
        <view class="panel__title">配置图标</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <AtAccordion
              title="标题三"
              :open="value3"
              :icon="{ value: 'tags', color: '#77a1fd' }"
              :onClick="onClick.bind(this, 'value3')"
            >
              <AtList :hasBorder="false">
                <AtListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <AtListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
              </AtList>
            </AtAccordion>
          </view>
        </view>
      </view>

      <!-- 包含描述信息 -->
      <view class="panel">
        <view class="panel__title">包含描述信息</view>
        <view class="panel__content no-padding">
          <view class="example-item">
            <AtAccordion
              title="标题三"
              note="描述信息"
              :open="value4"
              :icon="{ value: 'tags', color: '#77a1fd' }"
              :onClick="onClick.bind(this, 'value4')"
            >
              <AtList :hasBorder="false">
                <AtListItem
                  title="标题文字"
                  thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                />
                <AtListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                />
                <AtListItem
                  title="标题文字"
                  note="描述信息"
                  thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                />
              </AtList>
            </AtAccordion>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      value1: false,
      value2: true,
      value3: false,
      value4: false,
    }
  },
  methods: {
    onClick(stateName, value) {
      this[stateName] = value
    },
  },
}
</script>
