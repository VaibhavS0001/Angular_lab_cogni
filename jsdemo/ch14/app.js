import { Observable } from 'rxjs';

const obs = new Observable(
    subscriber => {
        subscriber.next(5)
        subscriber.next(10)
        subscriber.next(90)
        setTimeout(() => {
            subscriber.next(89)
        }, 2000)
    }
)
console.log("before 2 seconds")
obs.subscribe({
    next(i) {
        console.log(i)
    }
})
console.log("after 2 seconds")