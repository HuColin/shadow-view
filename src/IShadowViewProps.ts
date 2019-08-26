import { IScoped } from "./IScoped";
import { IShadowRootOptions } from "./IShadowRootOptions";

/**
 * ShadowView 属性
 */
export interface IShadowViewProps extends IShadowRootOptions {
  /**
   * 根元素的 tagName
   * 默认为 `shadow-view`
   */
  tagName?: string;

  /**
   * Shadow 容器中的子元素
   */
  children?: React.ReactNode;

  /**
   * React Ref function
   */
  ref?: Function;

  /**
   * 顶层元素的 className
   */
  className?: string;

  /**
   * 顶层元素 style
   */
  style?: any;

  /**
   * 针对容器作用域的一些设定
   */
  scoped?: IScoped;

  /**
   * 显示延时
   */
  showDelay?: number;

  /**
   * 显示动画持续时间
   */
  transitionDuration?: string;
}
