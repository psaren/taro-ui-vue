/*
 * @Author: pengyue
 * @Date: 2020-07-06 21:43:33
 * @LastEditTime: 2020-07-07 00:37:27
 * @LastEditors: pengyue
 * @Description: 
 * @FilePath: /taro-ui-vue/packages/taro-ui-vue-demo/global.d.ts
 */ 
import * as CSS from 'csstype'
import Vue, { VNode } from 'vue'

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";
declare module "*.vue";

declare namespace JSX {
  interface Element extends VNode {}
  interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
}

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq';
    [key: string]: any;
  }
}
export type CSSProperties = CSS.Properties<string | number>

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
}