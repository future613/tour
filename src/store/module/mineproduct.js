export const MineModule = {
    
    state:()=>({Common:[{
        id:'1', name:"罗小小",type:'身份证',number:"12345678910",phone:'14578963214',isselect:false},
        {id:'2', name:"罗中中",type:'身份证',number:"12345678910",phone:'14578963214',isselect:false},
        {id:'3', name:"罗大大",type:'身份证',number:"12345678910",phone:'14578963214',isselect:false}
    ],
    Order:{
        route:{},
        information:{},
        tourist:[],
        safe:{
            safe1:true,
            safe2:true
        }
    },
        MineProduct:[{
               id:"1",
               number:'订单号 7195351',
               type:'待出行',
               handel:'取消',
               time:'2015-12-29  12:04:00',
               title:'[春节]<魅力湘西过大年>湘西年夜饭，北京直飞',
               mode:'自驾游',
               begintime:"2016-02-07出发",
               price:'4580',
               details:{
                   title:'[春节]<魅力湘西过大年>湘西年夜饭，北京直飞',
                   order:{
                       number:'7195351',
                       city:'湘西',
                       setout:'2016-02-07',
                       setin:'2016-02-18',
                       people:'2成人',
                       room:'2人间，愿意拼房',
                       state:'出游确认中+',
                   },
                   cost:{
                    groupconst:'9990',
                    safeconst:'564',
                    allconst:'10554',
                    notpayment:'10554',
                   },
                   safe:{
                       safeone:'太平洋铝箱取消保险四 2份',
                       safetwo:'平安出境游全面型升级版（7天）2份',
                       safethree:'平安出境游全面升型升级版（10天）2份',
                   },
                   information:{
                       name:'罗小小',
                       phone:'18270837892',
                       email:'269326087@qq.com',
                   },
                   tourist:[
                    {   id:'1',
                        name:'罗小小',
                        myid:'123456789',
                        phone:'18270837892',
                    },
                   { id:'2',
                     name:'罗大大',
                     myid:'987654321',
                     phone:'15633020332',
                 }
                ],
               }
               }, 
               {
                    id:"2",
                    number:'订单号 7195351',
                    type:'待支付',
                    handel:'付款',
                    time:'2015-12-28  12:04:00',
                    title:'[5月]<阿尔山童话世界冰雪温泉之旅>，北京直飞',
                    mode:'自驾游',
                    begintime:" 2016-05-07出发",
                    price:'4580',
                    details:{
                        title:'[5月]<阿尔山童话世界冰雪温泉之旅>，北京直飞',
                        order:{
                            number:'7195351',
                            city:'湘西',
                            setout:'2016-02-07',
                            setin:'2016-02-18',
                            people:'2成人',
                            room:'2人间，愿意拼房',
                            state:'出游确认中+',
                        },
                        cost:{
                         groupconst:'9990',
                         safeconst:'564',
                         allconst:'10554',
                         notpayment:'10554',
                        },
                        safe:{
                            safeone:'太平洋铝箱取消保险四 2份',
                            safetwo:'平安出境游全面型升级版（7天）2份',
                            safethree:'平安出境游全面升型升级版（10天）2份',
                        },
                        information:{
                            name:'罗小小',
                            phone:'18270837892',
                            email:'269326087@qq.com',
                        },
                        tourist:[
                            {   id:'1',
                                name:'罗小小',
                                myid:'123456789',
                                phone:'18270837892',
                            },
                           { id:'2',
                             name:'罗大大',
                             myid:'987654321',
                             phone:'15633020332',
                         }
                        ],
                    }
                    },
               {
                id:"3",
                number:'订单号 7195351',
                type:'待评价',
                handel:'点评',
                time:'2015-12-27  12:04:00',
                title:'[4月]<海南海岛环驾8日自驾之旅>，海口直飞',
                mode:'自驾游',
                begintime:" 2016-04-07出发",
                price:'4580',
                details:{
                    title:'[4月]<海南海岛环驾8日自驾之旅>，海口直飞',
                    order:{
                        number:'7195351',
                        city:'湘西',
                        setout:'2016-02-07',
                        setin:'2016-02-18',
                        people:'2成人',
                        room:'2人间，愿意拼房',
                        state:'出游确认中+',
                    },
                    cost:{
                     groupconst:'9990',
                     safeconst:'564',
                     allconst:'10554',
                     notpayment:'10554',
                    },
                    safe:{
                        safeone:'太平洋铝箱取消保险四 2份',
                        safetwo:'平安出境游全面型升级版（7天）2份',
                        safethree:'平安出境游全面升型升级版（10天）2份',
                    },
                    information:{
                        name:'罗小小',
                        phone:'18270837892',
                        email:'269326087@qq.com',
                    },
                    tourist:[
                        {   id:'1',
                            name:'罗小小',
                            myid:'123456789',
                            phone:'18270837892',
                        },
                       { id:'2',
                         name:'罗大大',
                         myid:'987654321',
                         phone:'15633020332',
                     }
                    ],
                }
                },
               
               {
                id:"4",
                number:'订单号 7195351',
                type:'已取消',
                handel:'查看',
                time:'2015-12-27  12:04:00',
                title:'[5月]<食在广东粤菜美食6日自驾>，北京直飞',
                mode:'自驾游',
                begintime:"2016-05-07出发",
                price:'4580',
                details:{
                    title:'[5月]<食在广东粤菜美食6日自驾>，北京直飞',
                    order:{
                        number:'7195351',
                        city:'湘西',
                        setout:'2016-02-07',
                        setin:'2016-02-18',
                        people:'2成人',
                        room:'2人间，愿意拼房',
                        state:'出游确认中+',
                    },
                    cost:{
                     groupconst:'9990',
                     safeconst:'564',
                     allconst:'10554',
                     notpayment:'10554',
                    },
                    safe:{
                        safeone:'太平洋铝箱取消保险四 2份',
                        safetwo:'平安出境游全面型升级版（7天）2份',
                        safethree:'平安出境游全面升型升级版（10天）2份',
                    },
                    information:{
                        name:'罗小小',
                        phone:'18270837892',
                        email:'269326087@qq.com',
                    },
                    tourist:[
                        {   id:'1',
                            name:'罗小小',
                            myid:'123456789',
                            phone:'18270837892',
                        },
                       { id:'2',
                         name:'罗大大',
                         myid:'987654321',
                         phone:'15633020332',
                     }
                    ],
                }
                }
               ]}),

               mutations:{
                signup(state,payload){
                state.Order.route = payload
                },
                isselect(state,id){
                   state.Common =  state.Common.map(item=>item.id === id?{...item,isselect:!item.isselect}:item)
                },
                addtourits(state,paylode){      
                state.Common.push(paylode)
                },
                addpeople(state){
                  state.Order.tourist =  state.Common.filter(item=>item.isselect)
                },
                addProduct(state,paylode){
                   state.Order.route = paylode.route
                   state.Order.information = paylode.information
                  paylode.tourist.name && paylode.tourist.myid?state.Order.tourist.push(paylode.tourist):''
               },
               addTourist(state,paylode){
                state.Order.tourist.push(paylode.tourist)
               },
               checked1(state){        
                  state.Order.safe.safe1 =  !state.Order.safe.safe1
                  console.log(111)
               },
               checked2(state){
                state.Order.safe.safe2 = !state.Order.safe.safe2
             },
             filterType(state,type){
              state.MineProduct = type==='all'?state.MineProduct:state. MineProduct.filter(item=>item.type ===type)
             }
            },
               getters:{
                cost(state){
                 return   (state.Order.safe.safe1?177:0) + (state.Order.safe.safe2?177:0) +  (state.Order.route.num?state.Order.route.num*5890:0) +(state.Order.route.num2?state.Order.route.num2*5890:0)
                },
                
              }
              }