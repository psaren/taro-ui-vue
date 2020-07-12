<template>
  <view
    :class="classNames(rootClassName, classObject, className)"
    :style="customStyle"
    @tap="handleClick"
  >
    <button
      class="at-button__wxbutton"
      :lang="lang"
      :formType="formType === 'submit' || formType === 'reset' ? formType : undefined"
    />
    <!-- <form
      v-if="isWEAPP && !disabled"
      @submit="handleSubmit"
      @reset="handleReset"
    >
      <button
        class="at-button__wxbutton"
        :formType="formType"
        :openType="openType"
        :lang="lang"
        :sessionFrom="sessionFrom"
        :sendMessageTitle="sendMessageTitle"
        :sendMessagePath="sendMessagePath"
        :sendMessageImg="sendMessageImg"
        :showMessageCard="showMessageCard"
        :appParameter="appParameter"
      />
    </form>
    <view
      v-if="loading"
      class="at-button__icon"
    >
      <AtLoading
        :color="loadingColor"
        :size="loadingSize"
      />
    </view> -->
    <view
      v-if="loading"
      class="at-button__icon"
    >
      <AtLoading
        :color="loadingColor"
        :size="loadingSize"
      />
    </view>
    <view class="at-button__text">
      <slot />
    </view>
  </view>
</template>

<script lang="ts">
import AtButton from './main'
export default AtButton
</script>