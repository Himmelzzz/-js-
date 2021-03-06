
function searchRoad(start, end) {
    var openList = [], //开启列表
        closeList = [], //关闭列表
        result = [], //结果数组
        result_index; //结果数组在开启列表中的序号

    openList.push({
        x: start.x,
        y: start.y,
        G: 0
    }); //把当前点加入到开启列表中，并且G是0

    do {
        var currentPoint = openList.pop();
        closeList.push(currentPoint);
        var surroundPoint = SurroundPoint(currentPoint);
        for (var i in surroundPoint) {
            var item = surroundPoint[i]; //获得周围的八个点
            if (
                map(item.x,item.y) !=1&&
                map(item.x,currentPoint.y)!=1&&
                !existList(item, closeList) &&
                map(currentPoint.x,item.y)!=1){
                    //g 到父节点的位置
                    //如果是上下左右位置的则g等于10，斜对角的就是14

                var g = currentPoint.G + 10;
                if (!existList(item, openList)) { //如果不在开启列表中
                        //计算H，通过水平和垂直距离进行确定
                    item['H'] = Math.abs(end.x - item.x) * 10 + Math.abs(end.y - item.y) * 10;
                    item['G'] = g;
                    item['F'] = item.H + item.G;
                    item['parent'] = currentPoint;
                    openList.push(item);
                } else { //存在在开启列表中，比较目前的g值和之前的g的大小
                    var index = existList(item, openList);
                        //如果当前点的g更小
                    if (g < openList[index].G) {
                        openList[index].parent = currentPoint;
                        openList[index].G = g;
                        openList[index].F = g + openList[index].H;
                    }

                }
            }
        }
            //如果开启列表空了，没有通路，结果为空
        if (openList.length == 0) {
            break;
        }
        openList.sort(sortF); //这一步是为了循环回去的时候，找出 F 值最小的, 将它从 "开启列表" 中移掉
    } while (!(result_index = existList({
        x: end.x,
        y: end.y
    }, openList)));

        //判断结果列表是否为空
    if (!result_index) {
        result = [];
    } else {
        var currentObj = openList[result_index];
        do {
                //把路劲节点添加到result当中
            result.unshift({
                x: currentObj.x,
                y: currentObj.y
            });
            currentObj = currentObj.parent;
        } while (currentObj.x != start.x || currentObj.y != start.y);

    }
    return result;

}
    //用F值对数组排序
function sortF(a, b) {
    return b.F - a.F;
}
    //获取周围八个点的值
function SurroundPoint(curPoint) {
    var x = curPoint.x,
        y = curPoint.y;
    return [
        {
            x: x - 1,
            y: y - 1
        },
        {
            x: x,
            y: y - 1
        },
        {
            x: x + 1,
            y: y - 1
        },
        {
            x: x + 1,
            y: y
        },
        {
            x: x + 1,
            y: y + 1
        },
        {
            x: x,
            y: y + 1
        },
        {
            x: x - 1,
            y: y + 1
        },
        {
            x: x - 1,
            y: y
        }
        ]
}
    //判断点是否存在在列表中，是的话返回的是序列号
function existList(point, list) {
    for (var i in list) {
        if (point.x == list[i].x && point.y == list[i].y) {
            return i;
        }
    }
    return false;
}
