import config from 'config'
import utils from 'utils'
import gsap from 'gsap';
import classes from 'dom-classes';
import Default from './default';

class Gallery extends Default {
    
    constructor(opt) {
        
        super(opt)

        this.slug = 'gallery'
    }
    
    init(req, done) {

        console.warn('gallery.init()', req)
        
        super.init(req, done, { sub: req.params.id ? true : false })
    }
    
    dataAdded(done) {

        super.dataAdded()
        
        done()
    }
    
    animateIn(req, done) {

        classes.add(config.$body, `is-${this.slug}`)

        TweenLite.to(this.page, 1, {
            y: 0, 
            autoAlpha: 1,
            ease: Expo.easeInOut,
            onComplete: done
        });
    }

    animateOut(req, done) {

        classes.remove(config.$body, `is-${this.slug}`)

        TweenLite.to(this.page, 0.7, {
            y: 100,
            autoAlpha: 0,
            ease: Expo.easeInOut,
            clearProps: 'all',
            onComplete: done
        })
    }
    
    destroy(req, done) {

        console.warn('gallery.destroy()', req)
        
        super.destroy()

        this.page.parentNode.removeChild(this.page)
        
        done()
    }
}

module.exports = Gallery