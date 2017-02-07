/**
 * Created by epita on 2/5/2017.
 */

let zipList=function(list1t, list2t)
{
  let newList=[];
  let list1=list1t.slice();let list2=list2t.slice();
  let i =0;
  while(list1.length>0 || list2.length>0){
    if(i%2==0 && list1.length>0){
      newList.push(list1.shift());
    }
    else if(list2.length>0){
      newList.push(list2.shift());
    }
    i++;
  }
  return newList;
}
let zipListTheSimpleWay= function(list1,list2)
{
  return _.filter(_.flatten(_.zip(list1,list2)),function(val){return val!=null});
}
let l1=[1,3,5,7];
let l2=[2,4,6,8,9,10];

console.log(zipList(l1,l2));
console.log(zipListTheSimpleWay(l1,l2));
