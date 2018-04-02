//index.html
	//banner
		{
			let imgs=document.querySelectorAll(".banner_img img");
			let pages=document.querySelectorAll(".banner_lunbo_1");
			let banner=document.querySelector("#banner");

			//点击轮播点，出现相对应的图片，而且轮播点颜色随之改变
			pages.forEach(function(ele,index){
				ele.onclick=function(){
					for(let i=0;i<imgs.length;i++){
						imgs[i].classList.remove("active");
						pages[i].classList.remove("active");
					}
					imgs[index].classList.add("active");
					this.classList.add("active");
				}
			})

			//让banner图自己轮播
			let n=0;
			//声明一个t，方便调用函数
			let t=setInterval(move,3000);
			function move(){
				n++;
				//临界点：第一个or第五个
				if(n<0){
					n=imgs.length-1;
				}
				if(n===imgs.length){
					n=0;
				}
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pages[i].classList.remove("active");
				}
					imgs[n].classList.add("active");
					pages[n].classList.add("active");
			}

			//鼠标进入banner，停止轮播，离开继续轮播
			banner.onmouseenter=function(){
				clearInterval(t);
			}
			banner.onmouseleave=function(){
				t=setInterval(move,3000);
			}
		}

	//team
		{
			let imgs2=document.querySelectorAll(".team_bottom_3img");
			let imgs3=document.querySelectorAll(".team_bottom_rightimg");
			let words=document.querySelectorAll(".team_img_2");
			imgs2.forEach(function(ele,index){
				ele.onmouseenter=function(){
					for(let i=0;i<imgs2.length;i++){
						imgs2[i].classList.remove("active");
						imgs3[i].classList.remove("active");
						words[i].classList.remove("team_img_2color");
					}
					this.classList.add("active");
					imgs3[index].classList.add("active");
					words[index].classList.add("team_img_2color");
				}
			})
		}
	
	//产品中心
{
	let goodsB=document.querySelectorAll(".goods_bottom_ihov");
    goodsB.forEach(function (ele,index) {
		ele.onmouseenter=function () {
			for(let i=0;i<goodsB.length;i++){
                goodsB[i].classList.remove("active");
			}
			this.classList.add("active");
        }
    })
}