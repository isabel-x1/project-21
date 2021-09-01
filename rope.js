class rope{
	constructor(bodyA,pointB){
		var options= {
			bodyA:bodyA,
			pointB:pointB,
			stiffness:0.04,
			length=200
		}
	}
}
	{
     this.pointB=pointB
	 this.rope=Constraint.create(options);
	 World.add(world,this.chain);
	
	


     display(); {
		 if(this.chain.bodyA){
			 var pointA=this.chain.bodyA.position;
			 var pontB=this.pointB;
			 strokeWeight(4)
			 line(pointA.x,pointA.y,pointB.x,pointB.y);
		 }
	 }

	}
