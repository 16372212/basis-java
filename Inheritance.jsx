
```jsx
public class Vehicled {
	private String name;
	private  int topspeed;
	private int maximum;
	Vehicled(String n,int t,int max){
		 name = n;
		topspeed = t;
		 maximum = max;
	}
	public String getName() {
		return name;
	}
	public int getTopSpeed() {
		return topspeed;
	}
	public int getMaxPassengers() {
		return maximum;
	}
	
public static void main(String []args) {
	Vehicled v =  new Vehicled("Rocket", 50000, 6);
	System.out.println(v.getName());
	System.out.println(v.getTopSpeed());
	System.out.println(v.getMaxPassengers());
}
}

public class Car2 extends Vehicled{
	private double w;
	Car2(String n, int t, int max,double weight) {
		super(n, t, max);
	    w = weight;		
	}
	public double getWeight() {
		return w;
	}
	public static void main(String []args) {
		Car2 v =  new Car2("Rocket", 50000, 6,3.4);
		System.out.println(v.getWeight());
	}
}

public class text2 {
	
	public static String heaviestVehicle(Vehicled []vehicle) {
	    double max = 0;
	    int j = 0;
		for(int i = 0;i<vehicle.length;i++) {
	    	if( vehicle[i] instanceof Ship2 ) {
	    		if(((Ship2) vehicle[i]).getDisplacement()>=max) {
	    			max = ((Ship2) vehicle[i]).getDisplacement();
	    			j = i;
	    		}
	    	}
		}
		int j2 = 0;
		double max2 = 0;
		for(int i = 0;i<vehicle.length;i++) {
	    	if( vehicle[i] instanceof Car2 ) {
	    		if(((Car2) vehicle[i]).getWeight()>=max2) {
	    			max2 = ((Car2) vehicle[i]).getWeight();
	    			j2=i;
	    	    }
	    	}
		}
		if(max>max2) {
			return  vehicle[j].getName();
			}
		if(max<=max2) {
			return vehicle[j2].getName();
		}
		return null;
			
	}	
	public static void main(String []args) {
		
		Vehicled[] vehicles = new Vehicled[]{new Car2("Mazda 3", 190,5,199999.3), new Car2("Lamborghini Gallardo", 325,2,1.45), new Ship2("Titanic", 39,3327, 52310), new Car2("Toyota Avensis", 200,5,2.02),new Ship2("Nimitz", 58,5680, 100020)};
		System.out.println(heaviestVehicle((Vehicled[]) vehicles));
		System.out.println(heaviestVehicle((Vehicled[]) vehicles));
	}
}

```
