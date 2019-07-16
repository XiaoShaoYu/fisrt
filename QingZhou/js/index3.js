!function (t) {
    function A(t, element) { this.init(t, element) }
    t.fn.swiper = function (data) { return this.each(function () { new A(t(this), data); }) }; A.prototype = {
        init: function (element, data) {
            this.element = element;
            this.data = $.extend(
                {},
                { direction: "right", ratio: 16 / 9, ime: 3000, base: true, btn: true, over: true, stop: true }, 
                data
            ),
            this.box_left = parseInt(element.css('width'));//获取盒子宽度
            this.list_left = -this.box_left;//-宽度
            this.list_child = element.find('ul').children().length;//4
            var first_child = this.element.find('li')[0];
            var last_child = this.element.find('li')[this.list_child - 1];
            this.element.find('ul').append(first_child.cloneNode(true));
            this.element.find('ul').prepend(last_child.cloneNode(true));
            this.list_child = this.element.find('ul').children().length, this.assembly();
        },
        assembly: function () {
            this.adaption();
            this.btn();
            this.data.base && this.base();
            this.click(this.element);
            if (this.data.time !== 0) { this.Auto(this.element, this.data.direction); }
            this.data.over && this.mouseover();
        },
        btn: function () {
            var btn_next = document.createElement('div');
            btn_next.setAttribute('class', 'next');
            btn_next.setAttribute('className', 'next');
            var btn_prev = document.createElement('div');
            btn_prev.setAttribute('class', 'prev');
            btn_prev.setAttribute('className', 'prev');
            this.element.append(btn_next); this.element.append(btn_prev);
            this.element.find(".next").css('top', (this.box_left / this.data.ratio - 45) / 2); this.element.find(".prev").css('top', (this.box_left / this.data.ratio - 45) / 2);
        },
        adaption: function () {
            this.element.css('height', this.box_left / this.data.ratio);
            this.element.find('ul').css({ 'width': this.list_child * 100 + "%", 'left': this.list_left });this.element.find('li').css({ 'width': this.box_left, 'height': this.box_left / this.data.ratio });
            this.element.find('img').css({ 'width': this.box_left, 'height': this.box_left / this.data.ratio });
        },
        base: function () {
            var ol = document.createElement('ol'); ol.className = "nav";
            for (var i = 0; i < this.list_child - 2; i++) {
                var li = document.createElement('li'); ol.appendChild(li);
            }
            ol.style.left = (this.box_left - 30 * (this.list_child - 2) - 10) / 2 + "px"; ol.children[0].className = "action"; this.element.append(ol);
        },
        click: function (element) {
            var data = {
                box_left: parseInt(element.css('width')),
                list_left: -1 * (parseInt(element.css('width'))),
                list_child: element.find('ul').children().length,
                index: 0,
                flag: true
            }
            var next = this.element.find('.next');
            prev = this.element.find('.prev');
            base = this.element.find('.nav');
            next.on("click", data, function (d) {
                if (data.flag) {
                    data.index++;
                    if (data.index > (data.list_child - 3)) {
                        function delay() {
                            clearTimeout(time1);
                            element.find('ul').css("left", data.list_left);
                            data.index = 0;
                        }
                        var time1 = setTimeout(delay, 500);
                    }
                    var mr = data.index * data.list_left + data.list_left + "px";
                    element.find('ol').children().eq(data.index - 1).removeClass('action');
                    if (data.index > (data.list_child - 3)) {
                        element.find('ol').children().eq(0).addClass('action');
                    }
                    element.find('ol').children().eq(data.index).addClass('action').siblings().removeClass('action');
                    element.find('ul').animate({ left: mr }); data.flag = false; setTimeout(function () {
                        data.flag = true;
                    }, 500);
                }
            });
            prev.on("click", data, function (d) {
                if (data.flag) {
                    data.index--; 
                    if (data.index < 0) {
                        function delay() { clearTimeout(time1); 
                            element.find('ul').css("left", data.list_left * (data.list_child - 2)); data.index = data.list_child - 3; 
                        }
                        var time1 = setTimeout(delay, 500);
                    }
                    var ml = data.index * data.list_left + data.list_left + "px"; element.find('ul').animate({ left: ml }); 
                    element.find('ol').children().eq(data.index).addClass('action').siblings().removeClass('action'); 
                    data.flag = false; 
                    setTimeout(function () { data.flag = true; }, 500);
                }
            });
            var nav = base.children(); 
            for (var j = 0; j < nav.length; j++) { 
                (function (j) { var move_left = j * data.list_left + data.list_left + "px"; nav[j].onclick = function () { data.index = j; element.find('ul').animate({ left: move_left }); element.find('ol').children().eq(j).addClass('action').siblings().removeClass('action'); } })(j); 
            }
        },
        mouseover: function () { 
            var next = this.element.find('.next'); 
            prev = this.element.find('.prev'); 
            base = this.element.find('.nav'); 
            this.element.on('mouseover', function () { next.css("opacity", 0.5); prev.css("opacity", 0.5) }); 
            this.element.on('mouseout', function () { next.css("opacity", 0); prev.css("opacity", 0); }) 
        },
        Auto: function (element, direction) {
            function auto() {
                if (direction === "right") { element.find('.next').trigger("click"); }
                else if (direction === "left") { element.find('.prev').trigger("click"); }
                else { element.find('.next').trigger("click"); }
            }
            var time = this.data.time; 
            var timer = setInterval(auto, time); 
            if (this.data.stop === true) { 
                this.element.on('mouseover', function () { clearInterval(timer) }); 
                this.element.on('mouseout', function () { 
                    clearInterval(timer); timer = setInterval(auto, time); 
                });
            }
        }
    }
}(jQuery);