Component({
  options: {
		virtualHost: true
	},
  properties: {
    // 标签页数据源
    tabs: {
      type: Array,
      value: [],
      observer(val) {
        this.setData({
          scrolling: false
        }, () => {
          //异步加载数据时候, 延迟执行 init 方法, 防止无法正确获取 dom 信息
          this.init()
        })
      }
    },
    // 当前选项卡
    current: {
      type: Number,
      value: 0,
      observer(val) {
        this.scrollByIndex(newVal);
      }
    },
    // 是否可以滚动
    scroll: {
      type: Boolean,
      value: false
    },
    // tab高度 rpx
    height: {
      type: Number,
      value: 80
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    //字体大小
    size: {
      type: Number,
      value: 28
    },
    //字体颜色
    color: {
      type: String,
      value: '#666'
    },
    //选中后字体颜色
    selectedColor: {
      type: String,
      value: '#5677fc'
    },
    //选中后 是否加粗 ，未选中则无效
    bold: {
      type: Boolean,
      value: false
    },
    //滑块高度
    sliderHeight: {
      type: String,
      value: '2px'
    },
    //滑块背景颜色
    sliderBgColor: {
      type: String,
      value: '#5677fc'
    },
    //滑块 radius
    sliderRadius: {
      type: String,
      value: '2px'
    },
    //滑块bottom
    bottom: {
      type: String,
      value: '0'
    },
    //是否固定
    isFixed: {
      type: Boolean,
      value: false
    },
    //吸顶效果，为true时isFixed失效
    isSticky: {
      type: Boolean,
      value: false
    },
    //isFixed=true时，tab top值 px
    top: {
      type: Number,
      value: 0
    },
    zIndex: {
      type: [Number, String],
      value: 996
    }
  },
  lifetimes: {
    attached: function () {
      this.setData({
        currentTab: this.data.current
      })
    },
    ready: function () {
      this.init()
    }
  },
  data: {
    windowWidth: 0, // 屏幕宽度
    tabItems: [], // 所有 tab 节点信息
    /* 渲染数据 */
    scrolling: true, // 控制 scroll-view 滚动以在异步加载数据的时候能正确获得 dom 信息
    needTransition: false, // 下划线是否需要过渡动画
    translateX: 0, // 下划 line 的左边距离
    lineWidth: 0, // 下划 line 宽度
    scrollLeft: 0, // scroll-view 左边滚动距离
    currentTab: 0
  },
  methods: {
    /**
     * 切换菜单
     */
    handleClick(e) {
      let index = Number(e.currentTarget.dataset.index)
      this.triggerEvent('change', {
        index: index
      });
      this.scrollByIndex(index);
    },
    /**
     * 滑动到指定位置
     * @param tabCur: 当前激活的tabItem的索引
     * @param needTransition: 下划线是否需要过渡动画, 第一次进来应设置为false
     */
    scrollByIndex(tabCur, needTransition = true) {
      let item = this.data.tabItems[tabCur];
      if (!item) return;
      let itemWidth = item.width || 0,
        itemLeft = item.left || 0;
      this.setData({
        needTransition: needTransition,
        currentTab: tabCur
      })
      // 超出滚动的情况
      if (this.data.scroll) {
        // 保持滚动后当前 item '尽可能' 在屏幕中间
        let scrollLeft = itemLeft - (this.data.windowWidth - itemWidth) / 2;
        this.setData({
          scrollLeft: scrollLeft,
          translateX: itemLeft,
          lineWidth: itemWidth
        })
      } else {
        // 不超出滚动的情况
        this.setData({
          translateX: itemLeft,
          lineWidth: itemWidth
        })
      }
    },
    /**
     *  初始化函数
     */
    init() {
      const {
        windowWidth
      } = wx.getSystemInfoSync();
      this.setData({
        windowWidth: windowWidth || 375
      })
      const query = wx.createSelectorQuery().in(this);
      query.selectAll(".tui-item__child").boundingClientRect((res) => {
        this.setData({
          scrolling: true,
          tabItems: res
        })
        this.scrollByIndex(this.data.currentTab, false);
      }).exec();
    }
  }
})