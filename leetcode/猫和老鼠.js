//博弈问题
//所有节点都走过的话，即turns>=2n，双方必和
const MOUSE_WIN = 1;
const CAT_WIN = 2;
const DRAW = 0;

var catMouseGame = function(graph) {
    this.n = graph.length;
    this.graph = graph;
    this.dp = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n * 2).fill(-1)));
    return getResult(1, 2, 0);
};

const getResult = (mouse, cat, turns) => {
    if (turns === n * 2) {
        return DRAW;
    }
    //剪枝
    if (dp[mouse][cat][turns] < 0) {
        if (mouse === 0) {
            dp[mouse][cat][turns] = MOUSE_WIN;
        } else if (cat === mouse) {
            dp[mouse][cat][turns] = CAT_WIN;
        } else {
            getNextResult(mouse, cat, turns);
        }
    }
    return dp[mouse][cat][turns];
}

const getNextResult = (mouse, cat, turns) => {
    const curMove = turns % 2 === 0 ? mouse : cat;
    const defaultResult = curMove == mouse ? CAT_WIN : MOUSE_WIN;
    let result = defaultResult;
    const nextNodes = graph[curMove];
    for (const next of nextNodes) {
        if (curMove === cat && next === 0) {
            continue;
        }
        //走到这一步时候，猫和老鼠的位置
        const nextMouse = curMove == mouse ? next : mouse;
        const nextCat = curMove == cat ? next : cat;


        const nextResult = getResult(nextMouse, nextCat, turns + 1);
        //对于当前玩家而言，只要有一条路能到达必胜，那么结果就是必胜
        if (nextResult !== defaultResult) {
            result = nextResult;
            if (result !== DRAW) {
                break;
            }
        }
    }
    dp[mouse][cat][turns] = result;
}